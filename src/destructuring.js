export default function extractSpecialAttacks({ special }) {
  return special.map((attack) => {
    const entries = Object.entries(attack);
    const result = {};

    for (const [key, value] of entries) {
      result[key] = value;
    }

    if (!Reflect.has(result, "description")) {
      Reflect.set(result, "description", "Описание недоступно");
    }

    return result;
  });
}
