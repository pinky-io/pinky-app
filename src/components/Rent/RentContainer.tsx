import { RentForm } from "./RentForm";
import { useForm } from "react-hook-form";

export type RentFormValues = {
  duration: number;
  price: number;
};

export const RentContainer = () => {
  const { register, handleSubmit } = useForm<RentFormValues>({
    mode: "onChange",
  });

  const onSubmit = (data: RentFormValues) => {
    console.log(data);
  };

  return (
    <RentForm
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      register={register}
    />
  );
};
