import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Upload, User, Mail, Lock, Calendar } from "lucide-react";
import { useAuth } from "@/providers/AuthContext";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const UserProfile = () => {
  const { user } = useAuth();
  const [userInfo, setUserInfo] = useState({});

  const [isEditing, setIsEditing] = useState(false);
  const [editedInfo, setEditedInfo] = useState({ ...userInfo });
  const [avatarPreview, setAvatarPreview] = useState(null);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      setUserInfo({
        name: user.name || "",
        email: user.email,
        gender: "Male",
        dateOfBirth: "1990-01-01",
        password: "********",
        avatar: null,
      });
      setEditedInfo({ ...userInfo });
      setLoading(false);
    }
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectGenderChange = (value) => {
    setEditedInfo((prev) => ({
      ...prev,
      gender: value,
    }));
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result);
        setEditedInfo((prev) => ({
          ...prev,
          avatar: file,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    // Password validation
    if (newPassword !== confirmPassword) {
      setPasswordError("Passwords do not match");
      return;
    }

    // If new password is provided, update
    if (newPassword) {
      setEditedInfo((prev) => ({
        ...prev,
        password: newPassword,
      }));
    }

    setUserInfo(editedInfo);
    setIsEditing(false);
    setNewPassword("");
    setConfirmPassword("");
    setPasswordError("");
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-md mx-auto mt-6 p-6 border rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">User Profile</h2>
        <Button
          variant={isEditing ? "outline" : "default"}
          onClick={() => {
            setIsEditing(!isEditing);
            setNewPassword("");
            setConfirmPassword("");
            setPasswordError("");
          }}
        >
          {isEditing ? "Cancel" : "Edit"}
        </Button>
      </div>

      <div className="flex flex-col items-center mb-6">
        {isEditing ? (
          <div className="relative mb-4">
            <input
              type="file"
              accept="image/*"
              onChange={handleAvatarChange}
              className="hidden"
              id="avatar-upload"
            />
            <label htmlFor="avatar-upload" className="cursor-pointer relative">
              {avatarPreview || userInfo.avatar ? (
                <img
                  src={"https://github.com/shadcn.png"}
                  alt="Avatar"
                  className="w-24 h-24 rounded-full object-cover"
                />
              ) : (
                <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
                  <User className="w-12 h-12 text-gray-500" />
                </div>
              )}
              <div className="absolute bottom-0 right-0 bg-blue-500 text-white rounded-full p-1">
                <Upload className="w-4 h-4" />
              </div>
            </label>
          </div>
        ) : (
          <img
            src={"https://github.com/shadcn.png"}
            alt="Avatar"
            className="w-24 h-24 rounded-full object-cover mb-4"
          />
        )}

        {isEditing ? (
          <div className="space-y-4 md:space-y-6 w-full">
            <div className="w-full">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <Input
                name="name"
                value={editedInfo.name}
                onChange={handleInputChange}
                placeholder="Enter name"
                className="mt-1 block w-full px-3 py-2"
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <Input
                name="email"
                value={editedInfo.email}
                disabled
                placeholder="Email (cannot be changed)"
                className="mt-1 block w-full px-3 py-2"
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="dateOfBirth"
                className="block text-sm font-medium text-gray-700"
              >
                Date of Birth
              </label>
              <Input
                name="dateOfBirth"
                value={editedInfo.dateOfBirth}
                onChange={handleInputChange}
                placeholder="Date of Birth (YYYY-MM-DD)"
                className="mt-1 block w-full px-3 py-2"
                type="date"
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="gender"
                className="block text-sm font-medium text-gray-700"
              >
                Gender
              </label>
              <Select name="gender" onValueChange={handleSelectGenderChange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Male">Male</SelectItem>
                  <SelectItem value="Female">Female</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="w-full">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <Input
                type="password"
                name="password"
                value={editedInfo.password}
                onChange={handleInputChange}
                placeholder="Password"
                className="mt-1 block w-full px-3 py-2"
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <Input
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  setPasswordError("");
                }}
                placeholder="Confirm new password"
                className="mt-1 block w-full px-3 py-2"
              />
              {passwordError && (
                <p className="text-red-500 text-sm">{passwordError}</p>
              )}
            </div>
            <Button onClick={handleSave} className="w-full">
              Save Changes
            </Button>
          </div>
        ) : (
          <div className="text-center">
            <h2 className="text-xl font-bold">{userInfo.name}</h2>
            <p className="text-gray-600">{userInfo.email}</p>
            <div className="flex justify-center space-x-3 mt-2 text-gray-600">
              <div className="flex items-center">{userInfo.gender}</div>
              <div className="flex items-center">
                <Calendar className="mr-1 w-4 h-4" />
                {userInfo.dateOfBirth}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
