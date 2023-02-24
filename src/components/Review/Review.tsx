import { FC, useCallback, useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../utils/contexts";
import {
  updateUserDocFromAuth,
} from "../utils/firebase/firebase";
import "./Review.scss";

type Props = {
  idChallenge: string;
  reviewText?: string | null;
  className?: string;
  value?: string;
  limit?: number;
};

type ReviewForm = {
  reviewText: string;
};

export const Review: FC<Props> = ({
  idChallenge,
  reviewText,
  className,
  value = "",
  limit = 200,
}: Props) => {
  const [content, setContent] = useState(value.slice(0, limit));
  const [saved, setSaved] = useState<string | null>(null);
  const [editMode, setEditMode] = useState(false);
  const { currentUser } = useContext(UserContext);

  const setFormattedContent = useCallback(
    (text: string) => {
      setContent(text.slice(0, limit));
    },
    [limit, setContent]
  );

  useEffect(() => {
    if (reviewText) {
      setContent(reviewText);
      setSaved(reviewText);
    };
  }, [reviewText])

  const { register, handleSubmit, setValue} = useForm<ReviewForm>();

  const onSubmit = async (data: ReviewForm) => {
    if (!data) return;
    try {
      if (currentUser) {
        await updateUserDocFromAuth(currentUser, {
          feedbacks: { [idChallenge]: data.reviewText },
        });
        setEditMode(false);
        setContent(data.reviewText);
      }
    } catch (error) {
      console.log("user write feedback encountered an error", error);
    }
  };

  const cancelEditMode = () => {
    setEditMode(false);
    if (saved) {
      setContent(saved);
      setValue('reviewText', saved);
    };
  };

  const turnOnEditMode = () => {
    setEditMode(true);
    setSaved(content);
  };

  return (
    <div>
      {!editMode ? (
        <div className="textarea-container">
          <label>Challenge completed, leave you feedback</label>
          <p className="textarea-review">{content}</p>
          <div className="review-container">
            <button
              type="button"
              className="button btn-review"
              onClick={turnOnEditMode}
            >
              Edit Entry
            </button>
          </div>
        </div>
      ) : (
        <form method="post" onSubmit={handleSubmit(onSubmit)}>
          <label>Challenge completed, leave you feedback</label>
          <div className="textarea-container">
            <textarea
              {...register("reviewText")}
              className="textarea-review"
              onChange={(event) => setFormattedContent(event.target.value)}
              value={content}
            />
            <p className="textarea-limit">
              {content.length}/{limit}
            </p>
          </div>
          <div className="review-container">
            <button
              type="button"
              className="button btn-review btn-cancel"
              onClick={cancelEditMode}
            >
              Cancel
            </button>
            <button type="submit" className="button btn-review">
              Save
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
