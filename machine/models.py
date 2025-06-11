import enum
from pydantic import BaseModel


class CodeSnippet(BaseModel):
    code: str


class Item(enum.Enum):
    LUXURY_BASKET_MIX = "LUXURY_BASKET_MIX"
    BASIC_REGRET_COMBO = "BASIC_REGRET_COMBO"
    PASSIVE_AGGRESSIVE_PEACE = "PASSIVE_AGGRESSIVE_PEACE"
    GUILT_TRIP_SPECIAL = "GUILT_TRIP_SPECIAL"
    LOVE_BOMB_LUXE = "LOVE_BOMB_LUXE"


class ReceiptBody(BaseModel):
    choice: Item
