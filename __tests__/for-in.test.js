import orderByProps from "../src/for-in.js";

describe("orderByProps", () => {
  const obj = {
    name: "мечник",
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  };

  test("сортирует по заданному порядку + по алфавиту", () => {
    const result = orderByProps(obj, ["name", "level"]);
    expect(result).toEqual([
      { key: "name", value: "мечник" },
      { key: "level", value: 2 },
      { key: "attack", value: 80 },
      { key: "defence", value: 40 },
      { key: "health", value: 10 },
    ]);
  });

  test("если порядок пустой, сортирует только по алфавиту", () => {
    const result = orderByProps(obj, []);
    expect(result).toEqual([
      { key: "attack", value: 80 },
      { key: "defence", value: 40 },
      { key: "health", value: 10 },
      { key: "level", value: 2 },
      { key: "name", value: "мечник" },
    ]);
  });

  test("если есть несуществующие ключи — игнорируются", () => {
    const result = orderByProps(obj, ["nonexistent", "name"]);
    expect(result).toEqual([
      { key: "name", value: "мечник" },
      { key: "attack", value: 80 },
      { key: "defence", value: 40 },
      { key: "health", value: 10 },
      { key: "level", value: 2 },
    ]);
  });

  test("пустой объект — пустой результат", () => {
    expect(orderByProps({}, ["name"])).toEqual([]);
  });
});
