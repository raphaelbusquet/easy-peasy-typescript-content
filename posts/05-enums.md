# 🧠 Easy Peasy Typescript – #5 Enums

Os Enums em typescript, são uma forma de dar nomes legíveis a um conjunto fixo de valores. Enums existem para substituir strings soltas por algo mais seguro, organizado e fácil de manter.

Quando você tem valores fixos e repetitivos, Enums são a maneira certa de representá-los com clareza e segurança. Na imagem, temos um exemplo:

O "WeekDay" se torna um objeto e podemos acessar qualquer dia através de "WeekDay.qualquerDia", e usar a lógica pretendida. 

Note que esse exemplo foi bastante didático mas as possibilidades com Enum são mesmo infinitas. 

Agora me conta dev, esse post te ajudou? Então já deixa aquele like pra não perder nenhum conteúdo! 👇🏼💪🏼

#typescript #frontend #devtips #vidadedev #fullstack #programação #programming #backend #javascript #devlife

## Código
```
enum WeekDay {
  Sunday = "SUNDAY",
  Monday = "MONDAY",
  Tuesday = "TUESDAY",
  Wednesday = "WEDNESDAY",
  Thursday = "THURSDAY",
  Friday = "FRIDAY",
  Saturday = "SATURDAY"
}

function isWeekend(day: WeekDay): boolean {
  // Retorna true se for sábado ou domingo
  return day === WeekDay.Saturday || day === WeekDay.Sunday;
}

const selectedDay = WeekDay.Monday;

if (isWeekend(selectedDay)) {
  console.log("Não é dia útil");
} else {
  console.log("Dia útil");
}

```