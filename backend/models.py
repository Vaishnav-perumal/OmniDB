from __future__ import annotations

from dataclasses import dataclass
from datetime import datetime, timezone
from typing import Dict, List, Optional
from pydantic import BaseModel, Field


class PlatformPrice(BaseModel):
    platform: str
    current_price: float
    original_price: float
    discount_percent: int
    is_historical_low: bool = False
    currency: str = "USD"
    store_url: Optional[str] = None
    drm_type: Optional[str] = None
    updated_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())


class GameRecord(BaseModel):
    id: int
    ugdb_id: str
    slug: str
    title: str
    genres: List[str] = []
    header_image: Optional[str] = None
    platform_identifiers: Dict[str, str] = {}
    prices: Dict[str, PlatformPrice] = {}
    lowest_price: float = 0.0
    max_discount: int = 0
    last_live_check: Optional[str] = None
