import User from "../../../../lib/models/user.model";
import { currentUser } from "@clerk/nextjs/server";
import { connect } from "../../../../lib/mongodb/mongoose";

export const PUT = async (req) => {
  const user = await currentUser();

  try {
    await connect();
    if (!user) {
      return new Response('Unauthorized', { status: 401 });
    }
    const existingUser = await User.findById(user.publicMetadata.userMongoId);
    if (!existingUser) {
      return new Response('User not found', { status: 404 });
    }
    return new Response(JSON.stringify({ favs: existingUser.favs }), {
      status: 200,
    });
  } catch (error) {
    console.log('Error fetching user List:', error);
    return new Response('Error fetching user list', { status: 500 });
  }
};