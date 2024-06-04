import { IconButton, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./index.module.scss";
import { useState } from "react";

export const Search = () => {
  const [value, setValue] = useState("");

  const [showInput, setShowInput] = useState(false);

  return (
    <div className={styles.header__actions__search}>
      {showInput ? (
        <TextField
          autoComplete="off"
          onBlur={() => {
            setShowInput(false);
          }}
          autoFocus={true}
          className={styles.header__actions__search__input}
          label="搜索"
          variant="outlined"
          placeholder="请输入搜索内容"
          size="small"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton aria-label="search">
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      ) : (
        <SearchIcon
          className={styles.header__actions__search__icon}
          onClick={() => {
            setShowInput(true);
          }}
        />
      )}
    </div>
  );
};

export default Search;
