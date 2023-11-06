export interface ShowMore {
  moreTiles: boolean;
  setMoreTiles: (prev: (prev: boolean) => boolean) => void;
}

export interface Category {
    title: string;
  }