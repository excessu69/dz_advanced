import destructuring from "../src/destructuring.js";

describe("destructuring", () => {
  test("возвращает объект с описанием, если оно есть", () => {
    const character = {
      special: [
        {
          id: 1,
          name: "Огненный шар",
          icon: "http://...",
          description: "Наносит урон огнем",
        },
      ],
    };

    expect(destructuring(character)).toEqual([
      {
        id: 1,
        name: "Огненный шар",
        icon: "http://...",
        description: "Наносит урон огнем",
      },
    ]);
  });

  test("добавляет описание по умолчанию, если отсутствует", () => {
    const character = {
      special: [
        {
          id: 2,
          name: "Удар молнии",
          icon: "http://...",
        },
      ],
    };

    expect(destructuring(character)).toEqual([
      {
        id: 2,
        name: "Удар молнии",
        icon: "http://...",
        description: "Описание недоступно",
      },
    ]);
  });

  test("обрабатывает смесь объектов с description и без него", () => {
    const character = {
      special: [
        {
          id: 3,
          name: "Заморозка",
          icon: "http://...",
          description: "Замораживает врага",
        },
        {
          id: 4,
          name: "Взрыв",
          icon: "http://...",
        },
      ],
    };

    expect(destructuring(character)).toEqual([
      {
        id: 3,
        name: "Заморозка",
        icon: "http://...",
        description: "Замораживает врага",
      },
      {
        id: 4,
        name: "Взрыв",
        icon: "http://...",
        description: "Описание недоступно",
      },
    ]);
  });

  test("возвращает пустой массив, если special пустой", () => {
    const character = { special: [] };
    expect(destructuring(character)).toEqual([]);
  });
});
