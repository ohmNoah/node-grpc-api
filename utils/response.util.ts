import { DepartmentGroupBy, IDummyJson } from "../interface/dummy.interface";
export const groupByUsers = (data: IDummyJson) => {
  const ages = data.users.map((user) => user.age);
  const minAge = Math.min(...ages);
  const maxAge = Math.max(...ages);
  const ageRange = `${minAge}-${maxAge}`;
  const dep = "Department";
  const groupData = data.users.reduce<Record<string, DepartmentGroupBy>>(
    (acc, cur) => {
      const gender = cur.gender;
      const hairColor = cur.hair.color;
      const addressKey = cur.firstName + cur.lastName;
      const age = cur.age;
      if (!acc[dep]) {
        acc[dep] = {
          ageRange: "",
          hair: {},
          addressUser: {},
        };
      }

      acc[dep][gender] =
        typeof acc[dep][gender] === "number" ? acc[dep][gender] + 1 : 1;

      acc[dep].hair[hairColor] =
        typeof acc[dep].hair[hairColor] === "number"
          ? acc[dep].hair[hairColor] + 1
          : 1;

      acc[dep].addressUser[addressKey] = cur.address.postalCode;

      return acc;
    },
    {}
  );

  groupData[dep].ageRange = ageRange;
  return groupData;
};
