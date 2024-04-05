import { effect, onBeforeUnmount, onMounted, reactive } from "vue";

export function useRef<T>(value: T): Ref<T> {
	const reference = reactive<Ref<T>>({ value }) as Ref<T>;

	return reference;
}

export function useComputed<T>(fn: () => T): Ref<T> {
	const reference = reactive<Ref<T>>({ value: fn() }) as Ref<T>;

	useEffect(() => {
		reference.value = fn();
	});

	return reference;
}

export function useMount(fn: () => void): void {
	onMounted(fn);
}

export function useUnmount(fn: () => void): void {
	onBeforeUnmount(fn);
}

export function useEffect(fn: () => void): void {
	onMounted(() => {
		effect(fn);
	});
}

export function useStore<T>(store: Store<T>) {
	const reference = useRef(store.get());

	useEffect(() => {
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
