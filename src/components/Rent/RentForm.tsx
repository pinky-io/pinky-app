import { UseFormRegister, UseFormHandleSubmit } from "react-hook-form";
import { RentFormValues } from ".";

type RentFormProps = {
  register: UseFormRegister<RentFormValues>;
  onSubmit: (data: RentFormValues) => void;
  handleSubmit: UseFormHandleSubmit<RentFormValues>;
};

export const RentForm = ({
  handleSubmit,
  onSubmit,
  register,
}: RentFormProps) => {
  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "2px",
      }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <label htmlFor="duration">Duration</label>
      <input
        min={0}
        style={{
          width: "80px",
        }}
        type="number"
        {...register("duration")}
      />
      <label htmlFor="price">Price</label>
      <input
        min={0}
        style={{
          width: "80px",
        }}
        type="number"
        {...register("price")}
      />
      <button
        style={{
          width: "80px",
        }}
        type="submit"
      >
        Rent
      </button>
    </form>
  );
};
