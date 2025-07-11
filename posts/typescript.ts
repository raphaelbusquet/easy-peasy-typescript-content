type NullableString = string | null | undefined;
type NonNullString = NonNullable<NullableString>;

const str: NonNullString = "Hello, TypeScript!";

console.log(str);