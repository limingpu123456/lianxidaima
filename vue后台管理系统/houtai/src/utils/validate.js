//用来存放这个项目的所有验证方法
export function validateUsername(rule, value, callback) {
  //需求：用户输入3到20位，校验才能通过
  if (value.length < 3 || value.length > 20) {
    callback(new Error("用户名必须在3到20位的字符内！"));
  } else {
    callback();
  }
}
