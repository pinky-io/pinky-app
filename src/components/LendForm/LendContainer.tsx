import { LendForm } from "./LendForm";
import { useForm } from "react-hook-form";

export type RentFormValues = {
  duration: number;
  price: number;
};

type LendContainerProps = {
  tokenId: string;
  address: string;
};

export const LendContainer = ({ address, tokenId }: LendContainerProps) => {
  const { register, handleSubmit } = useForm<RentFormValues>({
    mode: "onChange",
  });

  const onSubmit = (data: RentFormValues) => {
    console.log(data, address, tokenId);
  };

  return (
    <LendForm
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      register={register}
    />
  );
};
