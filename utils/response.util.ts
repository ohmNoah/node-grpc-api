import { DepartmentGroupBy, IDummyJson } from "../interface/dummy.interface";
export const groupByUsers = (data: IDummyJson) => {
  const groupData = data.users.reduce<Record<string, DepartmentGroupBy>>(
    (acc, cur) => {
      const gender = cur.gender;
      const hairColor = cur.hair.color;
      const addressKey = cur.firstName + cur.lastName;
      const department = cur.company.department;
      if (!acc[department]) {
        acc[department] = {
          ageRange: "",
          hair: {},
          addressUser: {},
          minAge: cur.age,
          maxAge: cur.age,
        };
      } else {
        acc[department].minAge = Math.min(
          Number(acc[department].minAge),
          cur.age
        );
        acc[department].maxAge = Math.max(
          Number(acc[department].maxAge),
          cur.age
        );
      }

      acc[department][gender] =
        typeof acc[department][gender] === "number"
          ? acc[department][gender] + 1
          : 1;

      acc[department].hair[hairColor] =
        typeof acc[department].hair[hairColor] === "number"
          ? acc[department].hair[hairColor] + 1
          : 1;

      acc[department].addressUser[addressKey] = cur.address.postalCode;
      return acc;
    },
    {}
  );
  for (const department in groupData) {
    const { minAge, maxAge } = groupData[department];
    groupData[department].ageRange =
      minAge === maxAge ? `${minAge}` : `${minAge}-${maxAge}`;
    delete groupData[department].minAge;
    delete groupData[department].maxAge;
  }
  return { usersGroup: groupData };
};
