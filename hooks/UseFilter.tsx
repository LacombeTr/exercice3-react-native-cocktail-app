type UseFilterProps = {
    cocktailList: { [key: string]: any }[];
    filters: { [key: string]: string };
};

export const UseFilter = ({ cocktailList, filters }: UseFilterProps) => {
    const filteredCocktails =
        cocktailList.filter((cocktail) => {
            for (const key in filters) {
                if (
                    filters[key] &&
                    !cocktail[key]
                        .toLowerCase()
                        .trim()
                        .includes(filters[key].toLowerCase().trim())
                ) {
                    return false;
                }
            }
            return true;
        }) || [];

    return { filteredCocktails };
};
