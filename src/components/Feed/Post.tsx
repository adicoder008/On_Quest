import { Avatar } from "./Avatar";
import { Button } from "./Button";

interface PostProps {
  author: {
    name: string;
    avatar: string;
    title?: string;
  };
  content: {
    text: string;
    images?: string[];
  };
  metadata: {
    time: string;
    location: string;
  };
  stats: {
    likes: number;
    comments: number;
  };
}

export const Post = ({ author, content, metadata, stats }: PostProps) => {
  return (
    <article className="box-border border bg-[#F8F9FA] mb-3 p-3 rounded-lg border-solid border-[#C5C4C7]">
      <div className="box-border flex items-center justify-between px-2.5 py-1">
        <div className="flex items-center gap-3">
          <Avatar src={author.avatar} alt={author.name} />
          <div className="flex flex-col">
            <h3 className="text-base font-medium">{author.name}</h3>
            <p className="text-sm text-[#8B8A8F]">
              {metadata.time} · {metadata.location}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="primary" size="sm">
            Follow
          </Button>
          <button aria-label="More options">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 16.5C12.3978 16.5 12.7794 16.658 13.0607 16.9393C13.342 17.2206 13.5 17.6022 13.5 18C13.5 18.3978 13.342 18.7794 13.0607 19.0607C12.7794 19.342 12.3978 19.5 12 19.5C11.6022 19.5 11.2206 19.342 10.9393 19.0607C10.658 18.7794 10.5 18.3978 10.5 18C10.5 17.6022 10.658 17.2206 10.9393 16.9393C11.2206 16.658 11.6022 16.5 12 16.5ZM12 10.5C12.3978 10.5 12.7794 10.658 13.0607 10.9393C13.342 11.2206 13.5 11.6022 13.5 12C13.5 12.3978 13.342 12.7794 13.0607 13.0607C12.7794 13.342 12.3978 13.5 12 13.5C11.6022 13.5 11.2206 13.342 10.9393 13.0607C10.658 12.7794 10.5 12.3978 10.5 12C10.5 11.6022 10.658 11.2206 10.9393 10.9393C11.2206 10.658 11.6022 10.5 12 10.5Z"
                fill="black"
              />
            </svg>
          </button>
        </div>
      </div>

      <p className="text-sm leading-normal mx-0 my-3 px-2.5 py-1">
        {content.text}
      </p>

      {content.images && content.images.length > 0 && (
        <div className="flex gap-2 my-3 max-sm:flex-col">
          {content.images.map((image, index) => (
            <div
              key={index}
              className="flex-1 h-[324px] bg-[#D9D9D9] rounded-lg max-sm:h-[200px]"
            />
          ))}
        </div>
      )}

      <div className="flex items-center gap-4 pt-3 border-t border-t-[#C5C4C7]">
        <StatButton icon="heart" count={stats.likes} />
        <StatButton icon="comment" count={stats.comments} />
        <button className="ml-auto" aria-label="Share">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.33 3.67008C20.1408 3.48225 19.9035 3.3502 19.6442 3.28845C19.3849 3.22671 19.1135 3.23765 18.86 3.32008L4.23 8.20008C3.95867 8.28606 3.7189 8.45051 3.54099 8.67267C3.36307 8.89484 3.25498 9.16474 3.23037 9.4483C3.20576 9.73186 3.26573 10.0164 3.40271 10.2658C3.53969 10.5153 3.74754 10.7186 4 10.8501L10.07 13.8501L13.07 19.9401C13.1906 20.1785 13.3751 20.3786 13.6029 20.5181C13.8307 20.6576 14.0929 20.731 14.36 20.7301H14.46C14.7461 20.709 15.0192 20.6024 15.2439 20.424C15.4686 20.2457 15.6345 20.0039 15.72 19.7301L20.67 5.14008C20.7584 4.88801 20.7734 4.61602 20.7132 4.35578C20.653 4.09553 20.5201 3.85774 20.33 3.67008Z"
              fill="black"
            />
          </svg>
        </button>
      </div>
    </article>
  );
};

const StatButton = ({ icon, count }: { icon: string; count: number }) => (
  <button className="flex items-center gap-1 text-sm">
    {icon === "heart" && (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z"
          fill="none"
          stroke="black"
          strokeWidth="1.5"
        />
      </svg>
    )}
    {icon === "comment" && (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21 11.5C21 16.1944 16.9706 20 12 20C10.5332 20 9.14435 19.7192 7.91103 19.2079C7.15388 19.9234 5.95493 20.4903 4.4549 20.7366C4.28484 20.766 4.11384 20.7887 3.94244 20.8046C3.69541 20.8276 3.5 20.6047 3.5 20.3564C3.5 20.2181 3.5647 20.0913 3.64928 19.9833C3.73576 19.8737 3.83759 19.7557 3.94244 19.6341C4.11616 19.4314 4.3004 19.212 4.46693 18.9938C4.79447 18.5913 5.06283 18.1535 5.17533 17.726C3.80132 16.1254 3 13.9113 3 11.5C3 6.80558 7.02944 3 12 3C16.9706 3 21 6.80558 21 11.5Z"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )}
    <span>{count}</span>
  </button>
);
