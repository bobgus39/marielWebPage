import { useEffect, useState } from "react";
import "./Header.css";
import { NavLink, useLocation } from "react-router-dom";

function Header() {
  const [menu, setMenu] = useState(true);
  const location = useLocation();
  console.log(location);
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 760) {
        setMenu(false);
      } else {
        setMenu(true);
      }
    };

    handleResize(); // Llamamos a la función al montar el componente para establecer el estado inicial.

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="header">
      <NavLink to="/">
        <img
          className="imgHeader"
          src="../../img/mariuHeader.png"
          alt="Forn Mariu"
        />
      </NavLink>
      {menu ? (
        <label
          className="labelMenu"
          onClick={() => {
            setMenu(false);
          }}
        >
          <img
            className="menuIcon"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAYFBMVEUAAAD////s7OzV1dV4eHibm5uvr6/6+vrOzs7v7+/g4OD19fUMDAwcHBxtbW2QkJDm5uZ+fn6Hh4ciIiIyMjKpqakXFxdbW1vIyMi5ublBQUFgYGBTU1NnZ2e/v79ISEiN66FaAAAEA0lEQVR4nO2di7KiMAxAixUKLUpBEVAv9///cqksy0PdO3PtTJNMzhfkDNBHkhYREUKEDsAnLAMVloEKy0CFvIxCwY8yKi0PAg2HMlXvZIzcIzIZOeyleSGjdBk6st9RarWVyZLQQf2eJFvL2Cp0RJ9Q2aWMPoaO5zOOepaxyF0GGzvJZKjfsZEqG2UU4m9/JlEPGX0KHYgPTtrJqCJ0HH4o1CCjQ0fhCz3IEHkww6OJhDqHDsIXZyXIvGXDeybq0CH4oxboJ/+ZoyDzyQwfjbiEDsEfhFQceegA/JELEguzkZO4hw7BH3dBZjUzrGdEGzoEf7TChA7BH0ZEX6Fj8MXXsAXoQwfhi36QyZrQUfihyVwOgMgQ0D4SGhnSJPOaMhvzZvo7dCSf862njGaLfh9wbudcc4d8hXbqllWA7ho6nk+4duv6TIp4gG7SbeVM1+hqgCOHWr+oacoK4b7zUsmXBdrI6O6IauOZHzu9qM9u+wCU0X0do6Dutdk0A5Dv0EALy0CFZaDCMlBhGaiwDFRYBiosAxWWgQrLQIVloMIyUGEZqLAMVFgGKiwDlY2M2VnZJyjopd2Z9zJKtwWq9oZz0Wr1WkbGCJsBrvGrAq1NEKo4rondykjEZwKOci3To+4IvvdLmR7Vd//MuZ9lUqSfy8w1nWQ04iagieZv85whcIBWiMo8ZNLQcfghdTLZLXQYfrhl1Jq0Ec+Wa46RUKFj8IcSRD5/R0rrMBCBCXOioXWADlWH6f8hpOJA2Mv8jgutg9pkFgDuCH0cOgR/xLSunVBkJpqTEhGJfaajGrYAMnQQvpCDDI0UwCMJ4C6eIjFvXvR4JVhNYFGT1+OVYNGOwBHacjdlNDX6BM1Nz7lmiXyL1shlFcDuQ8fzCfvV1ZNRlCFeo8WbS0GHMc0ifdUa+3Rdq9NpEVac7u2iQrsunZuuQTTn5E23rp0/NzUoK1Fgn6+fptyhgRuWgQrLQIVloMIyUGEZqLAMVFgGKiwDFZaBCstAhWWgwjJQYRmosAxUiMuYbIeCzPwgY2SbFOUeBWWRtPJ95UwnFbKq5r1K9EsZFd8Q1TMn8lusnmV6XBcCz+THfitTI24JPtcrGVUgfSwjeaEWMujPnRSzDIEft9WTTEugG/jUjjJYO4DWNPYhQ+KvrUIkTsaiP6U9crWDDIGvf6QeZJAtx95zj0QWOgZ/ZKILHYI/OkGgQXuiFETGMseV1mlA1MvlNTktGaT/A3rFgdYAQGpoJjVpklrORAR+DDjyTW0LsCOQAXCcdoOMIvJoavVIaJDYnt3HhAb6e+ccj7vnnIzC+o/DmYM7QDtmNPGf1a7MnGs22BPnZlnSwD2k1WpTbJJoR4Hzvwtb/wApRWjx1w2G7QAAAABJRU5ErkJggg=="
            alt="menu"
          />
        </label>
      ) : (
        <>
          <label
            className="labelMenu"
            onClick={() => {
              setMenu(true);
            }}
          >
            <img
              className="menuIcon"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJwAAACUCAMAAABRNbASAAAAY1BMVEX///8AAADLy8tDQ0Px8fHFxcWxsbFlZWXc3Nz6+vrh4eG/v79qamr19fUsLCysrKw1NTVgYGCgoKDR0dEfHx8aGhqCgoImJiaKiopKSkp4eHg+Pj4JCQkUFBRaWlpQUFCYmJhhngRPAAADfUlEQVR4nO3c63KqMBQF4KC2gHfFa6u27/+UR7A9tZAFSWAle6bZP88cOt+skB3kEqXKyk+JqDrl6qfmoTX1mgu2Pem2oSW62j5sRWiHvooKNw7N0Ne4tM1CK1DN7l0kDY1AleZquguNQLWbyh3VclyFrQ3PdVLn0ARcZ7UPTcC1V5f6P63HgWpdl1xUw1uoQNVcqZq4USjcKOIiLuIiLuIiLuIiLuIC4haHTCwuf0uWU6G4/HA/8r2fjoXLH3f49r10JFyVW1njPjoOLn+6M9pDR8H9z62sHucdA7f4fUfZ/bwj4O495Hc5Zzc8blG3JcnSsRsPjmvkVuncshsap8mtrLVTdkPjiqsWl1xdsht8WNEzDJdZMfyEKI6AZ68jtJLmn3TNjtGEM/Cs4GI7KzS411qtJpZ/U43AbeW1ZXYa3ACVNe4rP+polx0Hp0ZgVhytsiPhVKbH2XVjFk4VS8CzyI6GUwU4797Ns+PhVIayM9YRcTA7447CxKkMzFnTbkzFqQKsFYZXn1ycysAV1NHoeRoZBzvKziQ7Ng6uZEuD7Og43I27s+Pj4JV790rmAefejX3gYL/ryk6Dexm8CvhWWfusMLlMJ1Z7Nw6MS3Zt2YXGJdeW7ILj2rpxeFxLR5GAgx1FAg52FBk40FFk4JJ0IRf3ob/jIQJ3y7U2EbiNdkxl4M6AJgGnnwsycGdwvknApS02TzjwC+zeQ/CY6nGEQlfCm/bDvOBege3WmpsfHMrt1nWgB9wKjWlHbj5wKLeP7kPpOJRbS+/1hoO5tfU3TziYm4mNjEO29t7rB4fGNDU8nolDuXX1Xh84xzXLC65PD2HjevReOg7lNjfqIVwcXOttbCTcILlpcWmtbtZv08AeYmejvB2BxnTefSgdN0APoeE+gc289/JwcC5Y50Z4C2y43AjJ6X9pWfYQFk47rk65UWZrMzvrHsLDNbLbOI0pCVfLzjU31uvfzzr73kvGPencc+N9cvCtc+shZNyXzvR3lmdcpeuVG/UDodeeuXE/rXrpl9vf/e4r4iIu4iIu4iIu4iLuL+Fmi0mQWjS3TGvuaCWnLkrs9nNJslNiN+4rf2mK3n9O6EaWZRVq2thZTUqVXxYduv9bmDoo/Cle8KoeJek/2g5eb9WyMRF51q2/3joVudXm7HvJRc9hAtbq54JgK2yFvTx2E/4HKldDDK/tm38AAAAASUVORK5CYII="
              alt="menu"
            />
          </label>

          <ul className="menu">
            <li>
              <NavLink
                className={
                  location.pathname !== "/marielWebPage.github.io/panes"
                    ? "menuNav"
                    : "activated"
                }
                to="/panes"
              >
                Carta de panes
              </NavLink>
            </li>
            <li>
              <NavLink
                className={
                  location.pathname !== "/marielWebPage.github.io"
                    ? "menuNav"
                    : "activated"
                }
                to="/"
              >
                Menu
              </NavLink>
            </li>
          </ul>
        </>
      )}
    </div>
  );
}

export default Header;
