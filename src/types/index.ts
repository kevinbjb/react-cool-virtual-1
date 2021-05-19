import { RefObject } from "react";

// Internal
export interface Measure {
  idx: number;
  start: number;
  end: number;
  size: number;
}

// External
export type ItemSize = number | ((index: number) => number);

export interface ScrollEasingFunction {
  (time: number): number;
}

export interface OnScroll {
  (options: {
    overscanStartIndex: number;
    overscanStopIndex: number;
    itemStartIndex: number;
    itemStopIndex: number;
    scrollOffset: number;
    scrollForward: boolean;
    userScroll: boolean;
  }): void;
}

export interface IsItemLoaded {
  (index: number): boolean;
}

export interface LoadMore {
  (options: {
    itemStartIndex: number;
    itemStopIndex: number;
    loadIndex: number;
    scrollOffset: number;
  }): void;
}

export interface Item {
  readonly index: number;
  readonly size: number;
  readonly outerSize: number;
  readonly isScrolling?: boolean;
  measureRef: (el: HTMLElement | null) => void;
}

export interface ScrollToOptions {
  offset: number;
  smooth?: boolean;
}

export interface ScrollTo {
  (value: number | ScrollToOptions, callback?: () => void): void;
}

export enum Align {
  auto = "auto",
  start = "start",
  center = "center",
  end = "end",
}

export interface ScrollToItemOptions {
  index: number;
  align?: Align;
  smooth?: boolean;
  autoCorrect?: boolean;
}

export interface ScrollToItem {
  (index: number | ScrollToItemOptions, callback?: () => void): void;
}

export interface Options {
  itemCount: number;
  itemSize?: ItemSize;
  horizontal?: boolean;
  overscanCount?: number;
  useIsScrolling?: boolean;
  scrollDuration?: number;
  scrollEasingFunction?: ScrollEasingFunction;
  onScroll?: OnScroll;
  loadMoreThreshold?: number;
  isItemLoaded?: IsItemLoaded;
  loadMore?: LoadMore;
}

export interface Return<O, I> {
  outerRef: RefObject<O>;
  innerRef: RefObject<I>;
  items: Item[];
  scrollTo: ScrollTo;
  scrollToItem: ScrollToItem;
}
