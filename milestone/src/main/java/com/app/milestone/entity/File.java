package com.app.milestone.entity;

import com.sun.istack.NotNull;
import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "TBL_FILE")
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class File extends Period {
    @Id
    @GeneratedValue
    private Long fileID;
    @NotNull
    private String fileName;
    @NotNull
    private String filePath;
    @NotNull
    private String fileUuid;
    @NotNull
    private int fileSize;
    @NotNull
    private boolean fileImageCheck;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "USER_ID")
    private School school;

    @Builder
    public File(String fileName, String filePath, String fileUuid, int fileSize, boolean fileImageCheck) {
        this.fileName = fileName;
        this.filePath = filePath;
        this.fileUuid = fileUuid;
        this.fileSize = fileSize;
        this.fileImageCheck = fileImageCheck;
    }
}