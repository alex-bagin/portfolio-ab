import { useEffect } from "react";

const ThemeSwtich = ( { isDark, setIsDark, ...props } ) =>
{

    useEffect( () =>
    {
        document.body.classList.toggle( "dark" )
    }, [ isDark ] )

    return <div { ...props } value={ isDark }
        onClick={ () => setIsDark( !isDark ) } className="themeSwitch" >
        { isDark
            ? <i className="fa-solid fa-moon"></i>
            : <i className="fa-solid fa-sun"></i>
        }
    </div>;
};

export default ThemeSwtich;