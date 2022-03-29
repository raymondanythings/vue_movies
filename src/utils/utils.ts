export function makeImagePath(id: string, format = "w500") {
  return `https://image.tmdb.org/t/p/${format}/${id}`;
}

export function splitActionType(action: string, type?: string): string {
  let value = action;
  if (value.includes("/")) {
    value = value.split("/")[1];
  }
  if (value.includes("_")) {
    const t = value.split("_");
    t[1] = t[1][0].toUpperCase() + t[1].slice(1);
    value = t.join("");
  }
  if (type) {
    value += type;
  }
  return value;
}

export function makeGetterAction(action: string) {
  const [show, arr] = action.split("/");
  return splitActionType(arr) + show[0].toUpperCase() + show.slice(1);
}
