import { Box, Flex, FormControl, FormLabel, Input, Spacer } from "@chakra-ui/react";
import { memo } from "react";
import { useFormContext, useFormState } from "react-hook-form";
import ErrorMessage from "../../../components/common/ErrorMessage";

const AddressCustomerForm = () => {
  const { register, clearErrors, control } = useFormContext();
  const { errors } = useFormState({ control });

  return (
    <Box>
      <Flex>
        <FormControl mt={4} isInvalid={!!errors.fullName} w="45%">
          <FormLabel mb={2}>Full Name *</FormLabel>
          <Input
            {...register("fullName")}
            name="fullName"
            type="text"
            placeholder="Full Name"
            onChange={() => clearErrors("fullName")}
          />
          {errors.fullName && <ErrorMessage error={errors.fullName.message} />}
        </FormControl>
        <Spacer  />
        <FormControl mt={4} isInvalid={!!errors.email} w="45%">
          <FormLabel mb={2}>Email *</FormLabel>
          <Input
            {...register("email")}
            name="email"
            type="email"
            placeholder="Email"
            onChange={() => clearErrors("email")}
          />
          {errors.email && <ErrorMessage error={errors.email.message} />}
        </FormControl>
      </Flex>
      <Flex>
        <FormControl mt={4} isInvalid={!!errors.address} w="45%">
          <FormLabel mb={2}>Address *</FormLabel>
          <Input
            {...register("address")}
            name="address"
            type="text"
            placeholder="Address"
            onChange={() => clearErrors("address")}
          />
          {errors.address && <ErrorMessage error={errors.address.message} />}
        </FormControl>
        <Spacer />
        <FormControl mt={4} isInvalid={!!errors.city} w="45%">
          <FormLabel mb={2}>City *</FormLabel>
          <Input
            {...register("city")}
            name="city"
            type="text"
            placeholder="City"
            onChange={() => clearErrors("city")}
          />
          {errors.city && <ErrorMessage error={errors.city.message} />}
        </FormControl>
      </Flex>
      <FormControl mt={4} isInvalid={!!errors.phoneNumber}>
          <FormLabel mb={2}>Phone Number *</FormLabel>
          <Input
            {...register("phoneNumber")}
            name="phoneNumber"
            type="text"
            placeholder="Phone Number"
            onChange={() => clearErrors("phoneNumber")}
          />
          {errors.phoneNumber && <ErrorMessage error={errors.phoneNumber.message} />}
        </FormControl>

    </Box>
  );
};

export default memo(AddressCustomerForm);
