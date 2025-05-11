import { useEffect, useState } from "react";
//кастомный хук, который будет дописывать теоретические города
export function useCitySearch(query) {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!query) {
            setResults([]);
            return;
        }
        const timeout = setTimeout (() => {
            setLoading(true);
            fetch(`https://students.netoservices.ru/fe-diplom/routes/cities?name=${query}`)
                .then((res) => res.json())
                .then((data) => {
                    setResults(data);
                    setLoading(false);
                })
                .catch((err) => {
                    console.log('Ошибка при поиске городов: useCitySearch', err);
                    setResults([]);
                    setLoading(false);
                });
        }, 300)
        return () => clearTimeout(timeout);
    }, [query]);
    console.log("results из useCitySearch:", results);
    return {results, loading};
}