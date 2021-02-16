import request from "@/utils/request";

export default {
  //1 添加课程信息
  getAllChapterVideo(courseId) {
    return request({
      url: `/eduservice/chapter/getChapterVideo/${courseId}`,
      method: "get"
    });
  }
};
