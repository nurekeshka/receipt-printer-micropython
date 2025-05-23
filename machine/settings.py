import configparser
import os

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

configs = configparser.ConfigParser()
configs.read(os.path.join(BASE_DIR, "settings.ini"))


class Settings:
    PORT = configs.get("RASPBERRY", "PORT")
    BAUDRATE = 115200
    TIMEOUT = 1
