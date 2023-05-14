import { LendForm } from "./LendForm";
import { useForm } from "react-hook-form";
import { useLend } from "../../hooks/useLend";

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

  const { lend } = useLend(address);

  const onSubmit = (data: RentFormValues) => {
    lend({ ...data, address, tokenId });
  };

  return (
    <LendForm
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      register={register}
    />
  );
};
