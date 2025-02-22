/**
 * @copyright 2024 muqarrabahmed
 * @license Apache-2.0
 */

import PropTypes from 'prop-types';

const ButtonPrimary = ({
  href,
  target = '_action',
  label,
  icon,
  classes
}) => {
  if (href) {
    return (
      <a
        href={href}
        target={target}
        download={"Muqarrab's Resume.pdf"}
        className={
          "btn btn-primary relative overflow-hidden transition-all duration-300 ease-in-out "
           + classes
        }
      >
        <span className="absolute inset-0 scale-0 bg-blue-400 opacity-50 transition-transform duration-300 rounded-full blur-xl hover:scale-150"></span>

        {label}

        {icon ?
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
          : undefined
        }
      </a>
    )
  } else {
    return (
      <button className={"btn btn-primary " + classes}>
        {label}

        {icon ?
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
          : undefined
        }
      </button>
    )
  }
}

ButtonPrimary.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.string,
  classes: PropTypes.string
}


/**
 * Outline Button
 */

const ButtonOutline = ({
  href,
  target = '_self',
  label,
  icon,
  classes
}) => {
  if (href) {
    return (
      <a
        href={href}
        target={target}
        className={"btn btn-outline " + classes}
      >
        {label}

        {icon ?
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
          : undefined
        }
      </a>
    )
  } else {
    return (
      <button className={"btn btn-outline " + classes}>
        {label}

        {icon ?
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
          : undefined
        }
      </button>
    )
  }
}

ButtonOutline.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.string,
  classes: PropTypes.string
}

export {
  ButtonPrimary,
  ButtonOutline
}