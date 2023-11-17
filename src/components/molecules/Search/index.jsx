import { AiOutlineSearch } from "react-icons/ai";
import PropTypes from "prop-types";
export const SearchInput = ({
  onChange,
  placeholder,
  onKeyDown,
  width = "w-[80%]",
}) => {
  SearchInput.propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    onKeyDown: PropTypes.func,
    width: PropTypes.string,
  };
  return (
    <form className="flex items-start">
      <label
        htmlFor="default-search"
        className="sr-only mb-2 text-sm font-medium text-gray-900"
      >
        Search
      </label>
      <div className="relative flex-1">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <AiOutlineSearch className="text-xl font-semibold text-slate-500" />
        </div>
        <input
          type="search"
          role="search"
          onKeyDown={onKeyDown}
          onChange={onChange}
          id="default-search"
          className={`block ${width} rounded-lg border-2 border-slate-500 bg-transparent p-2 pl-12 text-sm placeholder-slate-500   dark:border-slate-700`}
          placeholder={placeholder}
          required
        />
      </div>
    </form>
  );
};

export default SearchInput;
