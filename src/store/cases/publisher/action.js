import { createAsyncThunk } from "@reduxjs/toolkit";
import { getPublishers } from "../../../apis/publisher.api";

export const listPublishers = createAsyncThunk("publishers", async () => getPublishers());