import { FALLBACK_IMAGE } from '../../constants';
import { Profile } from '../../interfaces/profile';
import { skeleton } from '../../utils';
import LazyImage from '../lazy-image';

interface AvatarCardProps {
  profile: Profile | null;
  loading: boolean;
  avatarRing: boolean;
  resumeFileUrl?: string;
  headlines?: Array<string>;
}

/**
 * Renders an AvatarCard component.
 * @param profile - The profile object.
 * @param loading - A boolean indicating if the profile is loading.
 * @param avatarRing - A boolean indicating if the avatar should have a ring.
 * @param resumeFileUrl - The URL of the resume file.
 * @returns JSX element representing the AvatarCard.
 */
const AvatarCard: React.FC<AvatarCardProps> = ({
  profile,
  loading,
  avatarRing,
  resumeFileUrl,
  headlines,
}): JSX.Element => {
  return (
    <div className="card shadow-lg compact bg-base-100">
      <div className="grid place-items-center py-8">
        {loading || !profile ? (
          <div className="avatar opacity-90">
            <div className="mb-8 rounded-full w-32 h-32">
              {skeleton({
                widthCls: 'w-full',
                heightCls: 'h-full',
                shape: '',
              })}
            </div>
          </div>
        ) : (
          <div className="avatar opacity-90">
            <div
              className={`mb-8 rounded-full w-32 h-32 ${avatarRing
                ? 'ring ring-primary ring-offset-base-100 ring-offset-2'
                : ''
                }`}
            >
              {
                <LazyImage
                  src={profile.avatar ? profile.avatar : FALLBACK_IMAGE}
                  alt={profile.name}
                  placeholder={skeleton({
                    widthCls: 'w-full',
                    heightCls: 'h-full',
                    shape: '',
                  })}
                />
              }
            </div>
          </div>
        )}
        <div className="text-center mx-auto px-8">
          <h5 className="font-bold text-2xl">
            {loading || !profile ? (
              skeleton({ widthCls: 'w-48', heightCls: 'h-8' })
            ) : (
              <span className="text-base-content opacity-70">
                {profile.name}
              </span>
            )}
          </h5>
          <div className="mt-3 text-base-content text-opacity-60 font-mono text-sm whitespace-pre-line">
            {loading || !headlines
              ? skeleton({ widthCls: 'w-48', heightCls: 'h-5' })
              : headlines.join(" | ")}
            {loading || !profile
              ? skeleton({ widthCls: 'w-48', heightCls: 'h-5' })
              : '\n\nWith over a decade of hands-on experience leading cross-functional teams in the design, development, and delivery of complex distributed scalable and cloud solutions aimed at addressing accounting, finance, fulfillment and healthcare; \n\nI am seeking a challenging role in a large-scale environment. My goal is to tackle complex challenges and deliver tailored solutions that meet unique requirements to improve business automation processes.'}
          </div>
        </div>
        {resumeFileUrl &&
          (loading ? (
            <div className="mt-6">
              {skeleton({ widthCls: 'w-40', heightCls: 'h-8' })}
            </div>
          ) : (
            <div className="flex gap-2 mt-6">
              <a
                href={resumeFileUrl}
                target="_blank"
                className="btn btn-outline btn-sm text-xs opacity-50"
                download
                rel="noreferrer"
              >
                Download Resume
              </a>
              <a
                href="https://calendly.com/dtquocbao/30min"
                target="_blank"
                className="btn btn-primary btn-sm text-xs"
                rel="noreferrer"
              >
                Schedule Meeting
              </a>
            </div>
          ))}
      </div>
    </div>
  );
};

export default AvatarCard;
