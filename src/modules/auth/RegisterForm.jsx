import { Box, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { memo } from "react";
import ErrorMessage from "../../components/common/ErrorMessage";

function RegisterForm() {
  return (
   <Box>
    <FormControl mt={4} isInvalid>
      <FormLabel mb={2}>Full Name *</FormLabel>
      <Input name="fulllname" type="text" placeholder="Jhon Doe" />
      <ErrorMessage error='Error' />
    </FormControl>
    <FormControl mt={4}>
      <FormLabel mb={2}>Email *</FormLabel>
      <Input name="email" type="text" placeholder="example@gmail.com" />
      <ErrorMessage />
    </FormControl>
    <FormControl mt={4}>
      <FormLabel mb={2}>Password *</FormLabel>
      <Input name="password" type="password" placeholder="Create a password" />
      <ErrorMessage />
    </FormControl>
   </Box>
  );
};

export default memo(RegisterForm);
