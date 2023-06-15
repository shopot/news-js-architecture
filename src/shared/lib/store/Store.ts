import { ObserverInterface } from './types';

/**
 * Class Store
 */
export default class Store<TState> {
  protected state: TState;
  protected observers: Map<string, ObserverInterface>;

  /**
   * Constructor
   *
   * @param initialState
   */
  constructor(initialState: TState) {
    // Initial new state
    this.state = structuredClone<TState>(initialState);

    // Initial observers
    this.observers = new Map();
  }

  /**
   * Returns data of state
   *
   * @returns
   */
  public getState(): TState {
    return structuredClone<TState>(this.state);
  }

  public setState(stateNext: Partial<TState>): void {
    this.state = {
      ...this.state,
      ...stateNext,
    };

    this.publish();
  }

  /**
   * Notify state subscribers
   */
  protected publish(): void {
    for (const observer of this.observers.values()) {
      observer.update();
    }
  }

  /**
   * Subscribe to state
   *
   * @param id Is a uniq string key
   * @param subscriber IObserver object
   */
  public subscribe(id: string, subscriber: ObserverInterface): void {
    this.observers.set(id, subscriber);
  }

  /**
   * Unsubscribe from state
   *
   * @param id  Is a uniq string key
   */
  public unsubscribe(id: string): void {
    this.observers.delete(id);
  }

  /**
   * Unsubscribe all from state
   */
  public unsubscribeAll(): void {
    this.observers = new Map();
  }
}
