import { Box, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { memo } from "react";
import { useFormContext, useFormState } from "react-hook-form";
import ErrorMessage from "../../components/common/ErrorMessage";

function RegisterForm() {
  const { register, clearErrors, control } = useFormContext();
  const { errors } = useFormState({ control });

  return (
    <Box>
      <FormControl mt={4} isInvalid={!!errors.fullname}>
        <FormLabel mb={2}>Full Name *</FormLabel>
        <Input
          {...register("fullname")}
          name="fullname"
          type="text"
          placeholder="Jhon Doe"
          onChange={() => clearErrors("fullname")}
        />
        {errors.fullname && <ErrorMessage error={errors.fullname.message} />}
      </FormControl>
      <FormControl mt={4} isInvalid={!!errors.email}>
        <FormLabel mb={2}>Email *</FormLabel>
        <Input
          {...register("email")}
          name="email"
          type="text"
          placeholder="example@gmail.com"
          onChange={() => clearErrors("email")}
        />
        {errors.email && <ErrorMessage error={errors.email.message} />}
      </FormControl>
      <FormControl mt={4} isInvalid={!!errors.password}>
        <FormLabel mb={2}>Password *</FormLabel>
        <Input
          name="password"
          type="password"
          placeholder="Create a password"
          {...register("password")}
          onChange={() => clearErrors("password")}
        />
        {errors.password && <ErrorMessage error={errors.password.message} />}
      </FormControl>
    </Box>
  );
}

export default memo(RegisterForm);
