export interface ReduxAction<P> {
  type: string,
  payload: P,
}

export interface ReduxSetter<S, P = undefined> {
  (state: S, action: ReduxAction<P>): S
}

export interface ReduxGetter<S, R> {
  (state: S, ...args: Array<any>): R
}
