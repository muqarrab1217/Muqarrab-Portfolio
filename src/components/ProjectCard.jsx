/**
 * @copyright 2024 muqarrabahmed
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import PropTypes from 'prop-types';

const ProjectCard = ({
  imgSrc,
  title,
  tags,
  projectLink = '#',
  classes = ''
}) => {
  return (
    <a
      href={typeof projectLink === 'string' ? projectLink : '#'}
      target="_blank"
      rel="noopener noreferrer"
      className={"relative block p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors " + classes}
    >
      <figure className="img-box w-full rounded-lg mb-4 overflow-hidden">
        {imgSrc.includes('.mp4') ? (
          <video
            src={imgSrc}
            alt={title}
            loading="lazy"
            className="max-h-[300px] w-full object-cover"
            autoPlay
            muted
            loop
          />
        ) : (
          <img
            src={imgSrc}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        )}
      </figure>

      {/* Title, Tags, and Arrow */}
      <div className="flex flex-row items-start justify-between gap-4">
        <div>
          <h3 className="title-1 mb-3 text-lg font-semibold text-zinc-100">
            {title}
          </h3>

          <div className="flex flex-wrap items-center gap-2">
            {tags.map((label, key) => (
              <span
                key={key}
                className="h-8 text-sm text-zinc-400 bg-zinc-50/5 grid items-center px-3 rounded-lg hover:shadow-lg"
              >
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* Arrow button */}
        <div className="w-11 h-11 rounded-lg grid place-items-center bg-sky-400 text-zinc-950 shrink-0">
          <span className="material-symbols-rounded" aria-hidden="true">
            arrow_outward
          </span>
        </div>
      </div>
    </a>
  );
};

ProjectCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  projectLink: PropTypes.string, // should always be a string
  classes: PropTypes.string
};

export default ProjectCard;
