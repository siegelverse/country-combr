import { useState } from 'react';
import Link from 'next/link'
import { KeyboardArrowDownRounded, KeyboardArrowUpRounded } from '@material-ui/icons';
import styles from './CountriesTable.module.css';

const sortBy = (countries, value, direction) => {
    if (direction === 'asc') {
        return [...countries].sort((a,b) => (a[value] > b[value] ? 1 : -1))
    } else if (direction === 'desc') {
        return [...countries].sort((a,b) => (a[value] > b[value] ? -1 : 1))
    }

    return countries
}

const SortArrow = ({direction}) => {
    if (!direction) {
        return <></>
    }

    if (direction === 'desc') {
        return (
            <div className={styles.heading_arrow} >
                <KeyboardArrowDownRounded color='inherit' />
            </div>
        )
    } else {
        return (
            <div className={styles.heading_arrow} >
                <KeyboardArrowUpRounded color='inherit' />
            </div>
        )
    }
}

const CountriesTable = ({ countries }) => {
    const [direction, setDirection] = useState();
    const [value, setValue] = useState();

    const sortedCountries = sortBy(countries, value, direction);

    const toggleDirection = () => {
        if (!direction) {
            setDirection('desc');
        } else if (direction === 'desc') {
            setDirection('asc');
        } else {
            setDirection(null);
        }
    }

    const setValueAndDirection = (value) => {
        toggleDirection();
        setValue(value)
    }

    return <div>
        <div className={styles.heading} >
            <button className={styles.heading_name} onClick={() => setValueAndDirection('name')}>
                <div>Name</div>
                <SortArrow direction={direction} />
            </button>
            <button className={styles.heading_population} onClick={() => setValueAndDirection('population')}>
                <div>Population</div>
                <SortArrow direction={direction} />
            </button>
        </div>

        {sortedCountries.map((country) => (
            <Link href={`/country/${country.alpha3Code}`}>
                <div className={styles.row}>
                    <div className={styles.name}>{country.name}</div>
                    <div className={styles.population}>{country.population}</div>
                </div>
            </Link>
        ))}
    </div>
}

export default CountriesTable;