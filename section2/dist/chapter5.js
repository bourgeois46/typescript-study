// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
var Role;
(function (Role) {
  Role[(Role["ADMIN"] = 0)] = "ADMIN";
  Role[(Role["USER"] = 1)] = "USER";
  Role[(Role["GUEST"] = 2)] = "GUEST";
})(Role || (Role = {}));
var user1 = {
  name: "김원필",
  role: Role.ADMIN, // 0
};
var user2 = {
  name: "박성진",
  role: Role.USER, // 1
};
var user3 = {
  name: "윤도운",
  role: Role.GUEST, // 2
};

console.log(user1, user2, user3);
