import os
import time

from serial import Serial

from .constants import Symbols
from .settings import BASE_DIR, Settings
from .models import Item


class RaspberryConnector:
    def __init__(self):
        self.port = Settings.PORT
        self.timeout = Settings.TIMEOUT
        self.baudrate = Settings.BAUDRATE

    def receipt(self, item: Item) -> str:
        with open(os.path.join(BASE_DIR, "message.txt")) as file:
            code = self.write(file.read().replace("PLACEHOLDER", item.value))
            return self.write(code)

    def write(self, code: str) -> str:
        try:
            with Serial(Settings.PORT, Settings.BAUDRATE, timeout=1) as session:
                time.sleep(2)
                session.write(Symbols.CTRL_C)
                session.write(Symbols.RAW_REPL)
                time.sleep(0.1)

                for line in code.strip().splitlines():
                    session.write(line.encode("utf-8") + b"\r")
                    time.sleep(0.05)

                session.write(Symbols.CTRL_D)
                time.sleep(0.5)

                output = session.read_all().decode(errors="ignore")  # type: ignore
                return output
        except Exception as e:
            return f"Ошибка: {e}"
