import { onDestroy, onMount } from "svelte";

export function useReactive<T>(value: T): Ref<T> {
	const reference = $state<Ref<T>>({ value }) as Ref<T>;

	return reference;
}

export function useDerived<T>(fn: () => T): Ref<T> {
	const reference = $state<Ref<T>>({ value: fn() }) as Ref<T>;

	useSideEffect(() => {
		reference.value = fn();
	});

	return reference;
}

export function useMount(fn: () => void): void {
	onMount(fn);
}

export function useUnmount(fn: () => void): void {
	onDestroy(fn);
}

export function useSideEffect(fn: () => void): void {
	onMount(() => {
		$effect.pre(fn);
	});
}

export function useReactiveStore<T>(store: Store<T>) {
	const reference = useReactive(store.get());

	useSideEffect(() => {
		store.set(reference.value);
	});

	store.subscribe((value) => {
		reference.value = value;
	});

	return reference;
}

export type Ref<T> = { value: T };

export interface Store<T> {
	get(): T;
	lc: Readonly<number>;
	listen(
		listener: (value: Readonly<T>, oldValue: Readonly<T>) => void,
	): () => void;
	off(): void;
	subscribe(
		listener: (value: Readonly<T>, oldValue?: Readonly<T>) => void,
	): () => void;
	value: Readonly<T> | undefined;
	set(newValue: T): void;
}
