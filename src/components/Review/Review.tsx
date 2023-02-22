import { FC, useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import "./Review.scss";

type Props = {
  className?: string;
  value?: string;
  limit?: number;
};

type ReviewForm = {
  reviewText: string;
};

export const Review: FC<Props> = ({
  className,
  value = "",
  limit = 200,
}: Props) => {
  const [content, setContent] = useState(value.slice(0, limit));

  const setFormattedContent = useCallback(
    (text: string) => {
      setContent(text.slice(0, limit));
    },
    [limit, setContent]
  );

  const { register, reset, handleSubmit } = useForm<ReviewForm>();

  const onSubmit = async (data: ReviewForm) => {
    console.log(data);
  };

  const resetData = async () => {
    reset();
  };

  return (
    <form
      method="post"
      className="review-container"
      onSubmit={handleSubmit(onSubmit)}
    >
      <label>Leave you feedback</label>
      <div className="textarea-container">
        <textarea
          {...register("reviewText")}
          className="textarea-review"
          rows={10}
          cols={10}
          onChange={(event) => setFormattedContent(event.target.value)}
          value={content}
        />
        <p className="textarea-limit">
          {content.length}/{limit}
        </p>
      </div>
      <div>
        <button type="submit" className="button">
          Save
        </button>
        <button type="button" className="button"
          onClick={resetData}>
          Cancel
        </button>
      </div>
    </form>
  );
};
