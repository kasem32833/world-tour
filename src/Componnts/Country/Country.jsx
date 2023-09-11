import '../Country/country.css'

const Country = ({country}) => {
    const {name, flags} = country;
console.log(flags.png)
    return (
        <div className="box-style">
            <h4>Country:{name?.common}</h4>
            <img width={'200px'} height={'150px'} src= {flags.png} alt="" />
        </div>
    );
};

export default Country;