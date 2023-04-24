export class UserFollowDto {
  idUser: number;
  username: string;
  name: string;
  date_of_birth: Date;
  profil_image: string;
  following: FollowerDto[];
  followers: FollowerDto[];
}

export class FollowerDto {
  idUser: number;
  username: string;
  name: string;
  profil_image: string;
}
