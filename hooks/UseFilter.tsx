type UseFilterProps = {
    cocktailList: { [key: string]: any }[];
    filters: { [key: string]: string };
};

export const UseFilter = ({ cocktailList, filters }: UseFilterProps) => {
    const filteredCocktails = cocktailList.filter((cocktail) => {
        for (const key in filters) {
            const filterValue = filters[key];

            if (!filterValue) continue;

            const cocktailValue = cocktail[key];
            if (cocktailValue === undefined || cocktailValue === null) {
                return false;
            }

            const cocktailStr = String(cocktailValue);
            if (
                !cocktailStr
                    .toLowerCase()
                    .trim()
                    .includes(filterValue.toLowerCase().trim())
            ) {
                return false;
            }
        }
        return true;
    });

    return { filteredCocktails };
};
