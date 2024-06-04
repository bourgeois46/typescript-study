// object

let user: {
    id?: number; // optional property
    name: string;
} = {
    id: 1,
    name: "bourgeois",
};

user.id

user = {
    name: "bg",
};

let config: {
    readonly apiKey: string; // 값을 바꿀 수 없다. 읽기 전용
} = {
    apiKey: "MY_API_KEY",
};

// config.apiKey = "hacked";