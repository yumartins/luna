import {
	BadRequestError,
	ForbiddenError,
	NotFoundError,
	UnauthorizedError,
} from "@/http/errors";
import Elysia from "elysia";

const error = {
	FORBIDDEN: ForbiddenError,
	NOT_FOUND: NotFoundError,
	BAD_REQUEST: BadRequestError,
	UNAUTHORIZED: UnauthorizedError,
};

export default new Elysia().error(error).onError(({ set, code, error }) => {
	const status = {
		FORBIDDEN: 403,
		NOT_FOUND: 404,
		VALIDATION: 400,
		BAD_REQUEST: 400,
		UNAUTHORIZED: 401,
	};

	set.status = status[code as keyof typeof status] ?? 500;

	if (code === "VALIDATION") {
		return {
			...error,
			message: JSON.parse(error.message),
		};
	}

	const err = error as Readonly<Error>;

	return {
		code,
		message: err.message,
	};
});
