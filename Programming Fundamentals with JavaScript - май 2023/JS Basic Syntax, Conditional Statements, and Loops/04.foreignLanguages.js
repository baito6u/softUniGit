function foreignLanguages(countryName) {
    switch (countryName) {
        case 'England':
        case 'USA':
            console.log('English');
            break;
        case 'Argentina':
        case 'Spain':
        case 'Mexico':
            console.log('Spanish');
            break;
        default:
            console.log('unknown');
            break;
    }
}
foreignLanguages('Germany');