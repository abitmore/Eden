import { Heading } from "_app";
import { InductionExpiresIn, InductionProfileForm } from "inductions";
import { Induction, NewMemberProfile } from "inductions/interfaces";

interface Props {
    induction: Induction;
    isRevisitingProfile: boolean;
    pendingProfile: {
        profileInfo?: NewMemberProfile;
        selectedPhoto?: File;
    };
    setProfilePreview: (
        profileData: NewMemberProfile,
        profilePhoto?: File
    ) => void;
}

export const InductionProfileFormContainer = ({
    induction,
    isRevisitingProfile,
    pendingProfile,
    setProfilePreview,
}: Props) => {
    const { profileInfo, selectedPhoto } = pendingProfile;
    return (
        <>
            <Heading size={1} className="mb-2">
                {isRevisitingProfile
                    ? "Review your Eden profile"
                    : "Create your Eden profile"}
            </Heading>
            <InductionExpiresIn induction={induction} />
            <InductionProfileForm
                newMemberProfile={profileInfo || induction.new_member_profile}
                onSubmit={setProfilePreview}
                selectedProfilePhoto={selectedPhoto}
            />
        </>
    );
};
