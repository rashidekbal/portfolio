import { Link } from 'react-router-dom';

const TestimonialCard = ({ testimonial }) => {
  const { quote, name, role, avatar, relatedProjectSlug } = testimonial;
  const initial = name ? name.charAt(0).toUpperCase() : '?';

  return (
    <div className="bg-bg-elevated border border-border rounded-xl p-6 md:p-8">
      <span className="text-accent text-5xl font-heading opacity-30 leading-none select-none">
        &ldquo;
      </span>
      <p className="text-text-primary text-base md:text-lg leading-relaxed italic mt-2">
        {quote}
      </p>
      <div className="flex items-center gap-3 mt-6">
        {avatar ? (
          <img
            src={avatar}
            alt={name}
            className="w-10 h-10 rounded-full object-cover"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-accent-muted flex items-center justify-center text-accent font-semibold">
            {initial}
          </div>
        )}
        <div>
          <p className="text-text-primary font-semibold">{name}</p>
          <p className="text-text-muted text-sm">{role}</p>
        </div>
      </div>
      {relatedProjectSlug && (
        <Link
          to={`/projects/${relatedProjectSlug}`}
          className="inline-block text-accent text-sm hover:underline mt-4"
        >
          View related project &rarr;
        </Link>
      )}
    </div>
  );
};

export default TestimonialCard;
