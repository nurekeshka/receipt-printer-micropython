import os
import glob

BASE_DIR = os.path.dirname(__file__)


def raspberry_pi_port() -> str:
    candidates = glob.glob("/dev/tty.usbmodem*")

    for port in candidates:
        if os.access(port, os.R_OK | os.W_OK):
            return port

    raise RuntimeError("Raspberry Pi isn't connected")


class Settings:
    PORT = raspberry_pi_port()
    BAUDRATE = 115200
    TIMEOUT = 1
